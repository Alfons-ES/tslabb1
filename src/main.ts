export { };
import './style.css'

interface CourseInfo {
  code: string;
  name: string;
  progression: "A" | "B" | "C";
  syllabus: string;
}

const output = document.getElementById("outputTable") as HTMLTableElement;

loadCourses();

function loadCourses(): void {
  const savedCourses = localStorage.getItem("courses");

  if (!savedCourses) {
    return;
  }

  const courses: CourseInfo[] = JSON.parse(savedCourses);

  courses.forEach(course => {

    output.innerHTML += `
  <tr>
    <td>${course.code}</td>
    <td>${course.name}</td>
    <td id="tdcentre">${course.progression}</td>
    <td id="tdcentre"><a href="${course.syllabus}" target="_blank">länk</td>
  </tr>
  `

  });

}
//när sidan laddas in hämtas allt från localstorage och läggs ut på sidan.

(document.getElementById("add") as HTMLButtonElement).addEventListener("click", () => {

  console.log("knapptryck")

  //lägg en check för att se att allt finns, annars ett felmeddelande
  const tempCode: string = (document.getElementById("code") as HTMLInputElement).value;
  const tempName: string = (document.getElementById("name") as HTMLInputElement).value;
  const tempProgression: string = (document.getElementById("progression") as HTMLInputElement).value;
  const tempSyllabus: string = (document.getElementById("syllabus") as HTMLInputElement).value;


  const feedback = document.getElementById("feedback") as HTMLTextAreaElement

  if (tempCode === "" || tempName === "" || tempProgression === "" || tempSyllabus === "") {
    console.log("fyll i alla rutor")
    feedback.innerHTML = "fyll i alla rutor!"
    return;
  } else if (tempProgression !== "A" && tempProgression !== "B" && tempProgression !== "C") {
    console.log("felaktig progression")
    feedback.innerHTML = "Progressionen måste vara A, B eller C"
    return;
  } else {
    console.log("ifyllt korrekt")
  }


  const course: CourseInfo = {
    code: tempCode,
    name: tempName,
    progression: tempProgression as "A" | "B" | "C",
    syllabus: tempSyllabus,
  }

  console.log(course)




  output.innerHTML += `
  <tr>
    <td>${course.code}</td>
    <td>${course.name}</td>
    <td id="tdcentre">${course.progression}</td>
    <td id="tdcentre"><a href="${course.syllabus}" target="_blank">länk</td>
  </tr>
  `


  let courses: CourseInfo[] = JSON.parse(localStorage.getItem("courses") || "[]");

  courses.push(course);

  localStorage.setItem("courses", JSON.stringify(courses));


});