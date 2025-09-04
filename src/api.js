const BASEURL = 'https://eventx-backend-azem.onrender.com/api';
export async function apiGet(path){
const token = localStorage.getItem("token");
const res = await fetch(`${BASEURL}${path}`,{
    headers: token ? {Authorization : `Bearer ${token}` } : {}
});
if (!res.ok) throw new Error((await res.json()).message || "Error");
return res.json();
}
export async function apiPost(path, body) {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASEURL}${path}`, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error((await res.json()).message || "Error");
    return res.json();
}

export async function apiPut(path, body) {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASEURL}${path}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
        body: JSON.stringify(body),
        });
    if (!res.ok) throw new Error((await res.json()).message || "Error");
    return res.json();
}
export async function apiDelete(path) {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASEURL}${path}`, {
    method: "DELETE",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (!res.ok) throw new Error((await res.json()).message || "Error");
    return res.json();
}
