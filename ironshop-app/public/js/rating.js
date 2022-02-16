    const ratingsHTML = document.querySelectorAll(".rating")
    ratingsHTML.forEach((elem) => {
        const rating = parseInt(elem.dataset.rating)
        switch (rating) {
            case 1:
                elem.innerHTML = `
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                `
                break
            case 2:
                elem.innerHTML = `
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                `
                break
            case 3:
                elem.innerHTML = `
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                `
                break
            case 4:
                elem.innerHTML = `
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                `
                break
            case 5:
                elem.innerHTML = `
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star"></ion-icon>
                <ion-icon class="text-warning" name="star"></ion-icon>
                `
                break

            default:
                elem.innerHTML = `
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                <ion-icon class="text-warning" name="star-outline"></ion-icon>
                `
        }
    })