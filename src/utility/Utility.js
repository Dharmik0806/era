export const checkData = () => {
    let Data = localStorage.getItem("userData");

    if (Data) {
        return true;
    } else {
        return false;
    }
}