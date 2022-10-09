function updateInfo() {
    let reqBody = {
        "id": props.id,
        "title": infoTitle,
        "content": infoContent
    }
    fetch("https://eldossjogy.vercel.app/api/info/update", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody)
    }).then(handleErrors)
        .then(Response => toast("Success", { type: "sucess", duration: 2000 }))
        .catch(err => { toast("Error", { type: "error", duration: 2000 }) });
}

function deleteInfo() {
    let reqBody = {
        "id": props.id
    }
    fetch("https://eldossjogy.vercel.app/api/info/remove", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody)
    }).then(handleErrors)
        .then(Response => toast("Success", { type: "sucess", duration: 2000 }))
        .catch(err => { toast("Error", { type: "error", duration: 2000 }) });
        router.push("/admin/edit")
}