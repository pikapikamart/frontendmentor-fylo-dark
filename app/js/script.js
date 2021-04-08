class Observer {
    constructor(target, effect, threshold = 0.50) {
        this.target = target;
        this.effect = effect;
        this.options = {
            threshold: threshold
        }
    }

    observe() {
        const inViewport = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(this.effect, entry.isIntersecting);
                }

            })
        };

        const observer = new IntersectionObserver(inViewport, this.options);
        this.target.forEach(target => {
            observer.observe(target);
        })
    }
}

function animationElements(element) {
    return document.querySelectorAll(element);
}

new Observer(animationElements(".translate-left"), "show-transform").observe();
new Observer(animationElements(".translate-up"), "show-transform").observe();
new Observer(animationElements(".translate-right"), "show-transform").observe();


// For the Validation of form
function checkEmailForm() {
    const emailForm = document.querySelector("#email-form");
    const email = document.querySelector("#email");
    const errorResult = document.querySelector(".error-form");
    const successResult = document.querySelector(".success-form");
    let re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    
    emailForm.addEventListener("submit", event =>{
        event.preventDefault();
        errorResult.classList.remove("show-form");
        successResult.classList.remove("show-form");
        if (re.test(email.value)) {
            successResult.classList.add("show-form");
            email.value = "";
        } else{
            errorResult.classList.add("show-form")
        }
    })
}

checkEmailForm();