function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

Vue.createApp({
    data(){
        return{
            nameUser : "Đặng Minh Hiếu",
            className : 33
        }
    }
}).mount("#interpolation")


Vue.createApp({
    data(){
        return{
            ImgUrl : "https://m.media-amazon.com/images/I/61BSyRxB0mL._AC_UF1000,1000_QL80_.jpg",
            LinkInfo: "https://en.wikipedia.org/wiki/Invincible_(TV_series)"
        }
    }
}).mount("#bind-atribute")

Vue.createApp({
    methods : {
        taoSoNut(){
            const mangXucXac = [getRandomInt(1,6), getRandomInt(1,6), getRandomInt(1,6)];
            const soNut = mangXucXac.reduce((tong , xucXac) => tong += xucXac , 0);  
            return soNut;
        },
        renderTaiHayXiu(){
            const soNut = this.taoSoNut()
            if(soNut > 11){
                return "Tài"
            }else{
                return "Xỉu"
            }
            
        }
    }
}).mount("#method")

Vue.createApp({
    data(){
        return{
            message : `<h1> Học vuejs quá đã </h1>`
        }
    }
}).mount("#raw-html")

Vue.createApp({
    data() {
        return {
            count: 0,
        };
    },
    methods : {
        handleClickMe(event){
            console.log(event.target);
            console.log("click me");
        },
        handleIncrement(params){
            this.count = this.count + params;
        },
        handleSubmit(){
            alert("submit thành công");
        },
        handleLogin(){
            console.log("handleLogin");
        },
    },
}).mount("#event")