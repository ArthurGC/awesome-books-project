let DateTime = luxon.DateTime;
const dt = DateTime.now();
export const fullDate = dt.toLocaleString(DateTime.DATETIME_MED);
const timeBox = document.querySelector('.timeBox');

export const addDateToViewport = (dataTime) => {
    timeBox.innerHTML = `<p>${dataTime}</p>`;
}
