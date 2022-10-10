import toast from 'react-hot-toast';
function handleErrors(res) {
    if (!res.ok) { return res.text().then(text => { throw new Error(text) }) }
    else { return res.json(); }
}

function deleteProject(id, setProject) {
    let reqBody = {
        "id": id
    }
    fetch("http://localhost:3000/api/project/remove", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody)
    }).then(handleErrors)
        .then(r => {
            toast("Success", { type: "success", duration: 2000 })
            setProject((prevState) => { return prevState.filter(items => items._id != id) })
        })
        .catch(err => { toast("Error", { type: "error", duration: 2000 }) });
}

function updateProject(id,projectTitle,projectContent,projectImg,projectSrc,projectExt) {
    let reqBody = {
        "id":  id,
        "title": projectTitle,
        "content": projectContent,
        "img": projectImg,
        "link": projectSrc,
        "extlink": projectExt
    }
    fetch("http://localhost:3000/api/project/update", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody)
    }).then(handleErrors)
        .then(Response => toast("Success", { type: "sucess", duration: 2000 }))
        .catch(err => { toast("Error", { type: "error", duration: 2000 }) });
}

function addProject(projTitle, projContent, projImgLink, projSrcLink, projExtLink, setProject, setProjOpen) {
    let reqBody = {
        "title": projTitle,
        "content": projContent,
        "img": projImgLink,
        "link": projSrcLink,
        "extlink": projExtLink
    }
    fetch("http://localhost:3000/api/project/add", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody)
    }).then(handleErrors)
        .then(r => {
            toast("Success", { type: "success", duration: 2000 })
            setProject(prevArray => {[...prevArray, r.project]})
        })
        .catch(err => {
            try {
                toast("Error " + JSON.parse(err.message).message, { type: "error", duration: 2000 })
            } catch (error) {
                toast("Error " + err.message, { type: "error", duration: 2000 })
            }
        });
    setProjOpen(false);
}
export { addProject, updateProject, deleteProject };