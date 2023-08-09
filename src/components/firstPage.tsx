import { useState } from "react"
import axios from "axios"

const firstPage = () => {

    const [roleValue, setRoleValue] = useState("")
    const [qestionValue, setQestionValue] = useState("")
    const [responseValue, setResponseValue] = useState("")

    let handleChangeRole = (e : React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value
        setRoleValue(inputValue)
    }

    let handleChangeQestion = (e : React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value
        setQestionValue(inputValue)
    }

    let handleSubmit = () => {
        axios
        .post("http://127.0.0.1:8000/api/", {
          "role" : roleValue,
          "qestion" : qestionValue,
        })
        .then((response) => {
          setResponseValue(response.data.response);
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud:", error);
        });
    }

  return (
    <div className=" bg-white">
        <h1 className=" text-7xl font-bold">CLIENT SERVICE AI</h1>

        <div className=" m-5 p-1 bg-slate-900">
            <p className=" text-slate-200"> Role : </p>
            <input className=" text-center  " onChange={handleChangeRole}></input>
        </div>
        <div className=" m-5 p-1 bg-slate-900">
            <p className=" text-slate-200"> Qestion : </p>
            <input className=" text-center  " onChange={handleChangeQestion}></input>
            <button className=" bg-teal-800 text-white text-center p-2 rounded-lg"
            onClick={handleSubmit}> Submit </button>
        </div>

        <section>
            <h3 className=" text-3xl"> RESPONSE </h3>
            <p>{responseValue}</p>
        </section>

    </div>
  )
}

export default firstPage
