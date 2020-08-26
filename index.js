const check = ()=>{
    const input = document.getElementById("json-input");
    try {
        const json = JSON.parse(input.value);
        window.alert("Your Json is valid",json)
    } catch (e) {
        window.alert(e)
    }
}