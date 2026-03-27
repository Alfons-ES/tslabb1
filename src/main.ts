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
  } else if (tempProgression !== "A" && tempProgression !== "B" && tempProgression !== "C") {
    console.log("felaktig progression")
  } else {
    console.log("ifyllt korrekt")
  }


  const course: Partial<CourseInfo> = {
    code: tempCode,
    name: tempName,
    progression: tempProgression as "A" | "B" | "C",
    syllabus: tempSyllabus,
  }

  //använd CourseInfo för const Input : CourseInfo = temp + temp + temp + temp

  //lägg ut input till sidan
  //lägg till Input i localstorage


});