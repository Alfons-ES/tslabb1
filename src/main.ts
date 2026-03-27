export { };
import './style.css'

interface CourseInfo {
  code: string;
  name: string;
  progression: "A" | "B" | "C";
  syllabus: string;
}

//när sidan laddas in hämtas allt från localstorage och läggs ut på sidan.

(document.getElementById("add") as HTMLButtonElement).addEventListener("click", (e: Event) => {

  console.log("knapptryck")

  //lägg en check för att se att allt finns, annars ett felmeddelande
  const tempCode: string = (document.getElementById("code") as HTMLInputElement).value;
  const tempName: string = (document.getElementById("name") as HTMLInputElement).value;
  const tempProgression: string = (document.getElementById("progression") as HTMLInputElement).value;
  const tempSyllabus: string = (document.getElementById("syllabus") as HTMLInputElement).value;

  if (tempCode === "" || tempName === "" || tempProgression === "" || tempSyllabus === "") {
    console.log("fyll i alla rutor")
    return;
  } else if (tempProgression !== "A" && tempProgression !== "B" && tempProgression !== "C") {
    console.log("felaktig progression")
    return;
  } else {
    console.log("ifyllt korrekt")
  }


  const course: Partial<CourseInfo> = {
    code: tempCode,
    name: tempName,
    progression: tempProgression as "A" | "B" | "C",
    syllabus: tempSyllabus,
  }

  console.log(course)

  const output = (document.getElementById("outputTable") as HTMLTableElement)


  output.innerHTML += `
  <tr>
    <td>${course.code}</td>
    <td>${course.name}</td>
    <td>${course.progression}</td>
    <td>${course.syllabus}</td>
  </tr>
  `



  //lägg till Input i localstorage


});