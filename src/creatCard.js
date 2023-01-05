
export function addContent(parentElement, elementsArray, typeElement) {
    elementsArray.forEach(element => {
        const container = document.createElement('div');
        const elemForAdd = document.createElement(typeElement);
        if (typeElement === "audio" || typeElement === "video")
        elemForAdd.controls = true;
        const discription = document.createElement('p');

        discription.innerHTML = element.discription
        discription.className = "discription"
        elemForAdd.src = element.file;
        elemForAdd.className = "image"
        container.className = "image-container";


        container.append(elemForAdd);
        container.append(discription);
        parentElement.append(container);
    });
}