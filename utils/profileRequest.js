import toast from 'react-hot-toast';
function handleErrors(res) {
    if (!res.ok) { return res.text().then(text => { throw new Error(text) }) }
    else { return res.json(); }
}

function updateInfo(id, name, status, link, setProfile) {
    let reqBody = {
        "id": id,
        "name": name,
        "status": status,
        "pfp": link
    }
    fetch("https://eldossjogy.vercel.app/api/profile/update", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody)
    }).then(handleErrors)
        .then(r => {
            toast("Successfully updated profile", { type: "success", duration: 2000 })
            setProfile(r.info)
        })
        .catch(err => { toast("Error occurred while trying to update", { type: "error", duration: 2000 }) });
}

export {updateInfo};