import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event) {
  //   // console.log("printing first name")
  //   // console.log(event.target.value);
  //   // apde navi value ne print karavi j apda First name ma lakhi hse
  //   setFirstName(event.target.value);
  // }
  // function changelastNameHandler(event) {
  //   // console.log("Printing last name")
  //   // console.log(event.target.value);
  //   // apde navi value ne print karavi j apda last name ma lakhi hse
  //   setLastName(event.target.value);
  // }


  // multiple state(vastu) hoy to tene handle karva ni 1st rite a che k apde alag alag single variable banavi ne handle karo badha stated ne jem apde upar "changeFirstNameHandler" and "changelastNameHandler" banavi ne aa bane states ne alag alag handle karela che tem.....and 2nd and most effective method a che k apde aek OBJECT banavi ne badha states ne handle karo
  // apde ahiya "formData" naam no object banaviyo....and tene niche mujab initialise karavi didhu
  const [formData, setFormData] = useState(  {firstName: "", 
  lastName: "", email:"", comments:"", isVisible:true, mode:"", favCar:"" } );

  // console.log(formData)

  // OBJECT vala case ma apde khali aek j handler banavi ne akha object ne handle karishu
  // apde aa function ni aa badh aj state ni value ne handle(update) karishu 
  function changeHandler(event) {
    // khali event.target thi j pan element[changeHandler,submitHandler...etc...tuk ma kayo tag <input> , <textarea></textarea>,<check></check>..j pan tag che teni akhi value api deshe ] che tene apde dekhadi shakiye chiye...and event.target.value ma apde te element ni value ne dekhadi shakiye chiye
    // event.target a j element upar click kariye te element ni badhi j properties(name, value, checked, type) ni values ape che 
    const {name, value, checked, type} = event.target
    // apde aa set kariye data tyare apde pase juni values(old-data) to hase j ( ...prevFormData) j(old-data ne) aana va-de apde leshu and jode j value set karvi che te hase........ahiya apde Old-data atle laishu kem k apda OBJECT ma j bija fild k element no data che te apde pase tem no tem rahe jem hato ...for example apdi pase firstName="Harsh" che and lastName="Trivedi" che have apde email="abc@gmail.com" hato tene change kari ne navo email="xyz@gmail.com" karvu che to apde aa email ni value set kariye tyare j juno data(old-data) firstName and lastName che te apdi pase tem no tem rahe te mate apde juno data ne jode lakhiye chiye and te juna data ne access karva mate apde ...prevFormData no use kariye chiye
    // pan apde to OBJECT banayo che tema apde aekk j handler banaviyu che to data kai fild(firstName, lastNam, email, comments) no change thayo che te k v rite khabar padshe??? kem k badhi fild ne aek j handler hndle kare che mate data kai fild ma update/change thayo che te khabar padva mate apde "name" attribute no use kariye chiye and aa name attribute ne generally apde j easyly khabar pade tevu naam apiye chiye
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name]:event.target.value             //aapde 'FORM' ni ander property access karvi hoy to apde square bracket[] ma lakhvi pade..............normal case ma apde value(event.target.value) thi apde j pan perticulour element no data nikadi shakiye chiye ....tem aa buttons(check button/redio button) na case ma apde value(event.target.value) ni jagiyaye a "checked" naam ni filed no use kari ne data ne access/nikadi shakiye chiye(atle k perticulor button a checked[selected] che k nathi te jani shakay che)
        
        // event.taget thi j value avti hati te apde upar lai gaya and Name ma value "checked" che k "value" che te mujab name ne apde set karishu
        [name]: type ==="checkbox" ? checked : value
      }
    });
  }


  // MMMMMMMIIIIIIMMMMPPPP
  // CONTROLL-COMPONENTS ==> MAINTAIN STATE/STATES INSIDE COMPONENTS ===> ano matalab che k apde darek component ni state maintain kari rakheli che ===> have mano k apdi pase 3 input element che , to aa 3 input element ni states pan aa loko ne(CONTROLL-COMPONETS ne) khabar hashe......apdo akho data/whole-state track thay che j ma badho j data che ....akha form no data a "formData" varible ma track thay che .......have CONTROLL-COMPONENT ma apdo darek(dar-aek) element ni ander ,te element ni state track thashe...........apdi pase mano k 3 <inpout1></inpout1>  <input2></input2> and <input3></input3> input element che to aa 3ney element ni state a aa 3ney element ni ander oan track thashe ............and avu element ni ander state ne track karva mate apde "VALUE" attribute no use karishu



  function submitHandler(event) {
    //  submit button ne click karva ni j default behavipur thay che te na thay te mate apde niche ni line lakhi che  
    event.preventDefault();
    //print
    console.log("Finally printing the entireform ka data ........")
    console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
      <br/>
        <input
          type="text"
          placeholder='first name'
          onChange={changeHandler}  
          name="firstName"
          // value ne add kari(controll-components).........j thi aa perticulor <input> tag a potani state ne maintain kare che.........apde darek <input> tag na element sathe te element ni value/state ne store karavi lidho
          value={formData.firstName}
        />

        <br/>
        <br></br>

        <input
          type="text"
          placeholder='last name'
          onChange={changeHandler} 
          name="lastName" 
          // value ne add kari(controll-components).........j thi aa perticulor <input> tag a potani state ne maintain kare che.........apde darek <input> tag na element sathe te element ni value/state ne store karavi lidho............tuk ma apde formData/mainData mathi j pan koi perticulor element ni value che te value ne te perticulour element sathe "sync" karaviye chiye
          value={formData.lastName}
        />

        <br/>
        <br/>
        <input
          type="email"
          placeholder="Enter your email here"
          onChange={changeHandler}
          name="email"
          // value ne add kari(controll-components).........j thi aa perticulor <input> tag a potani state ne maintain kare che.........apde darek <input> tag na element sathe te element ni value/state ne store karavi lidho............tuk ma apde formData/mainData mathi j pan koi perticulor element ni value che te value ne te perticulour element sathe "sync" karaviye chiye 
          value={formData.email}  
          />

<br/><br/>
        <textarea
          placeholder='enter your comments here'
          onChange={changeHandler}
          name="comments"
          // value ne add kari(controll-components).........j thi aa perticulor <input> tag a potani state ne maintain kare che.........apde darek <input> tag na element sathe te element ni value/state ne store karavi lidho............tuk ma apde formData/mainData mathi j pan koi perticulor element ni value che te value ne te perticulour element sathe "sync" karaviye chiye
          value={formData.comments}
         /> 
         <br/>
         <br/>

         <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
          />
          {/* checkbox/radio button sathe attach karvu hoy lable to apde "htmlFor" no use karvo pade che  */}
          <label htmlFor='isVisible'>Am I visible ?</label>

          <br/>
          <br/>


          {/* apde grouping karva mate <fieldset></fieldset> tag no use kariye chiye and tene caption/title apva mate apde <legend></legend> tag no use kariye chiye */}
          <fieldset>
            <legend>Mode:</legend>

            {/* radio button ma apde ichiye k khali aek j button select thay to apde <input> tag ma radio button ne 'name' j apiye chiye te same j apdu padshe jetala pan radio button banaviye tema.........jo apde 'name' same nahi apiye <input> tag ma radio button ne to apde multiple radio button selec kari shakiye chiye ..j radio button mate khot kahevay...mate radio button vala case ma apde "name" ni value same j rakhva ni atle k same j 'name' apva nu  */}
            <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            // value ne add kari(controll-components).........j thi aa perticulor <input> tag a potani state ne maintain kare che.........apde darek <input> tag na element sathe te element ni value/state ne store karavi lidho............tuk ma apde formData/mainData mathi j pan koi perticulor element ni value che te value ne te perticulour element sathe "sync" karaviye chiye 
            value="Online-Mode"
            id="Online-Mode"
            // normal case ma apde value thi apde j pan perticulour element no data nikadi shakiye chiye ....tem aa buttons(check button/redio button) na case ma apde value ni jagiyaye a "checked" naam ni filed no use kari ne data ne access/nikadi shakiye chiye(atle k perticulor button a checked[selected] che k nathi te jani shakay che)
            // aa checked karva thi te check/radio button by-default select karvi hoy to thai shake che  
            // ahiya radio button che mate jo te checked hase to value 'true' avshe and jo un-checked hase to value 'false' avshe ..pan ahiya to starting ma apde apda radio button nu name apelu che j string che mate apde true and false ma value male atle apde niche mujab lakhiyu che .......and aa k che k jo aa id=Online-Mode valu radio button select karo to output ma mode ma Online-Mode lakhelu avavu joiye
            checked={formData.mode === "Online-Mode"}
          />
          {/* checkbox/radio button sathe attach karvu hoy lable to apde "htmlFor" no use karvo pade che  */}
          <label htmlFor='Online-mode'>Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            // value ne add kari(controll-components).........j thi aa perticulor <input> tag a potani state ne maintain kare che.........apde darek <input> tag na element sathe te element ni value/state ne store karavi lidho............tuk ma apde formData/mainData mathi j pan koi perticulor element ni value che te value ne te perticulour element sathe "sync" karaviye chiye 
            value="Offline-Mode"
            id="Offline-Mode"
            // normal case ma apde value thi apde j pan perticulour element no data nikadi shakiye chiye ....tem aa buttons(check button/redio button) na case ma apde value ni jagiyaye a "checked" naam ni filed no use kari ne data ne access/nikadi shakiye chiye(atle k perticulor button a checked[selected] che k nathi te jani shakay che)
            // aa checked karva thi te check/radio button by-default select karvi hoy to thai shake che 
            // ahiya radio button che mate jo te checked hase to value 'true' avshe and jo un-checked hase to value 'false' avshe ..pan ahiya to starting ma apde apda radio button nu name apelu che j string che mate apde true and false ma value male atle apde niche mujab lakhiyu che.......and aa k che k jo aa id=offline-Mode valu radio button select karo to output ma mode ma Offline-Mode lakhelu avavu joiye 
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor='Offline-mode'>Offline Mode</label>

          </fieldset>
          <label htmlFor='favCar'> Tell me your Favourite Car </label>
          {/* Drop-Down manue banava mate apde <select></select> tag no use karye chiye */}
          <select
            name="favCar"
            id="favCar"
            // value ne add kari(controll-components).........j thi aa perticulor <input> tag a potani state ne maintain kare che .........apde darek <input> tag na element sathe te element ni value/state ne store karavi lidho............tuk ma apde formData/mainData mathi j pan koi perticulor element ni value che te value ne te perticulour element sathe "sync" karaviye chiye
            value={formData.favCar}
            onChange={changeHandler}
          >
          {/* Drop-Down manue ne option apva apde <option> </option> tag no use kariye chiye */}
          <option value="scarpio">Scarpio</option>
          <option value="fartuner">fartuner</option>
          <option value="Tharrr">Tharrr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>

          </select>

         {/* <input type='submit' value='submit'/> */}
         <br/>
         <br/>
         <button>Submit</button>






      </form>
    </div>
  );
}

export default App;
