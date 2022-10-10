import toast from 'react-hot-toast';
function handleErrors(res) {
    if (!res.ok) { return res.text().then(text => { throw new Error(text) }) }
    else { return res.json(); }
}

function updateInfo(id, infoTitle, infoContent) {
    let reqBody = {
        "id": id,
        "title": infoTitle, 
        "content": infoContent
    }
    fetch("http://localhost:3000/api/info/update", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody)
    }).then(handleErrors)
        .then(r => {
            toast("Success", { type: "sucess", duration: 2000 })
        })
        .catch(err => { toast("Error", { type: "error", duration: 2000 }) });
}

function deleteInfo(id, setInfo) {
    let reqBody = {
        "id": id
    }
    fetch("http://localhost:3000/api/info/remove", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody)
    }).then(handleErrors)
        .then(r => {
            toast("Success", { type: "success", duration: 2000 })
            setInfo((prevState) => { return prevState.filter(items => items._id != id)})
        })
        .catch(err => { toast("Error", { type: "error", duration: 2000 }) });
}

function addInfo(infoTitle, infoContent, setBio, setInfoOpen,reset) {
    let reqBody = {
        "title": infoTitle,
        "content": infoContent
    }
    fetch("http://localhost:3000/api/info/add", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody)
    }).then(handleErrors)
        .then(r => {
            reset()
            toast("Success", { type: "success", duration: 2000 })
            setBio(prevArray => [...prevArray, r.info])
        })
        .catch(err => { toast("Error", { type: "error", duration: 2000 }) });
    setInfoOpen(false);
}

export { addInfo, updateInfo, deleteInfo };