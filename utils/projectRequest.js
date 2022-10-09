function deleteProject() {
    let reqBody = {
        "id": props.id
    }
    fetch("https://eldossjogy.vercel.app/api/project/remove", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody)
    }).then(handleErrors)
        .then(Response => toast("Success", { type: "sucess", duration: 2000 }))
        .catch(err => { toast("Error", { type: "error", duration: 2000 }) });
    router.push('/admin/edit');
}

function updateProject() {
    let reqBody = {
        "id": props.id,
        "title": projectTitle,
        "content": projectContent,
        "img": projectImg,
        "link": projectSrc,
        "extlink": projectExt
    }
    fetch("https://eldossjogy.vercel.app/api/project/update", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody)
    }).then(handleErrors)
        .then(Response => toast("Success", { type: "sucess", duration: 2000 }))
        .catch(err => { toast("Error", { type: "error", duration: 2000 }) });
    router.push('/admin/edit');

}