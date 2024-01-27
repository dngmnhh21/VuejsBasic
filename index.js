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

Vue.createApp({
    data(){
        return{
            message : ""
        };
    },
    
}).mount("#two-way-binding")

Vue.createApp({
    data(){
        return{
            count: 0,
            lastName: "Đặng",
            firstName: "Minh hiếu",
            fullDataName: "",
        };
    },
    /*
    watch dùng đẻ theo dõi 1 data duy nhất
    */
    watch: {
        count(newValue,oldValue){
           console.log("new value: ", newValue);
           console.log("old value: ", oldValue);
           if(newValue > 10){
            this.count = 0;
           }
        },
        lastName(newValue){
           this.fullDataName = newValue + " " + this.firstName;
        },
        firstName(newValue){
            this.fullDataName = this.lastName + " " + newValue;
         },
    },
    /*
    computed dùng để:
    tính toán nhiều data và cho ra kết quả hiển thị trên màn hình
    */
    computed: {
      fullName(){
        return this.lastName + " " + this.firstName;
      },
    },
    /*
    method dùng để xử lý:
    -event
    -function (tính năng trên trang web)
    */
    methods: {
      handleIncrement(){
        this.count += 1;
        this.firstName = "Minh Hiếu";
      },
    },
}).mount("#computed-and-watchers")

Vue.createApp({
    data(){
        return{
            active: false,
            styleForP: {
                backgroundColor: "red",
                color: "yellow",
                fontSize: "50px",
            },
            styleForText: {
                textAlign: "left"
            },
        };
    },
    methods: {
        handleStyle(){
            this.styleForP.color = "blue";
        },
        handleActive(){
           this.active = true
        },
    },
    
}).mount("#styling")

Vue.createApp({
    data(){
        return{
            isLogin: false,
            nameHero: "",
            blackpink: [{
                name: "Lisa",
                image: "https://media-vov.emitech.vn/sites/default/files/styles/large/public/2023-11/2_9.jpeg.jpg"
            },
            {
                name: "Jennie",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg"
            },
            {
                name: "Rose",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/20190106_%28NEWSEN%29_%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%28BLACKPINK%29%2C_%EC%88%98%EC%A4%8D%EC%9D%80_%EB%A7%8E%EC%9D%80_%EC%86%8C%EB%85%80%EC%A7%80%EB%A7%8C_%EB%8F%8B%EB%B3%B4%EC%9D%B4%EB%8A%94_%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4_%EB%AF%B8%EB%AA%A8_%28Golden_Disc_Awards_2019%29_%283%29.jpg/640px-20190106_%28NEWSEN%29_%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%28BLACKPINK%29%2C_%EC%88%98%EC%A4%8D%EC%9D%80_%EB%A7%8E%EC%9D%80_%EC%86%8C%EB%85%80%EC%A7%80%EB%A7%8C_%EB%8F%8B%EB%B3%B4%EC%9D%B4%EB%8A%94_%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4_%EB%AF%B8%EB%AA%A8_%28Golden_Disc_Awards_2019%29_%283%29.jpg"
            },
            {
                name: "Jisoo",
                image: "https://2sao.vietnamnetjsc.vn/images/2024/01/25/14/57/jisoo-1.jpg"
            }],

        };
    },
    methods: {
        handleLogin(){
            this.isLogin = true;
        },
        handleNameHero(nameHero){
            this.nameHero = nameHero;
        },
        handleLogin(){
            this.isLogin = true;
        },
    },
    
}).mount("#directive")