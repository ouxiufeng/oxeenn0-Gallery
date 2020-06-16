let friendsData = [
  {id: 0, name: "Jeremy Keith", avatar: "https://picsum.photos/50/50?random=3", status: "online"},
  {id: 1, name: "Chris Allen", avatar: "https://picsum.photos/50/50?random=4", status: "online"},
  {id: 2, name: "Vanessa Witton", avatar: "https://picsum.photos/50/50?random=5", status: "online"},
  {id: 3, name: "Freud Nicole", avatar: "https://picsum.photos/50/50?random=6", status: "online"},
  {id: 4, name: "Corey Orrico", avatar: "https://picsum.photos/50/50?random=7", status: "offline"},
  {id: 5, name: "Amy Cassidy", avatar: "https://picsum.photos/50/50?random=8", status: "offline"},
  {id: 6, name: "Maggie Hammer", avatar: "https://picsum.photos/50/50?random=9", status: "offline"},
  {id: 7, name: "Greg Giles", avatar: "https://picsum.photos/50/50?random=10", status: "offline"},
  {id: 8, name: "Tara Margolyes", avatar: "https://picsum.photos/50/50?random=11", status: "offline"},
  {id: 9, name: "Liliana Hart", avatar: "https://picsum.photos/50/50?random=12", status: "offline"},
]

let vm = new Vue({
  el: "#container",
  data: {
    friendsData: friendsData,
    favoriteSwitch: false,
    textareaStr: "",
    likeCounter: 0
  },
  methods: {
    friendAvatarStyle: function(item) {
      let color = "#8ebbb5"
      if(item.status == "online") {
        color = "#8ebbb5"
      }else if(item.status == "offline") {
        color = "#bb8e8e"
      }
      return {
        "backgroundImage": `url( ${item.avatar} )`,
        "border": `2px solid ${color}`,
        "boxShadow": `0 0 10px ${color}`
      }
    },
    favoriteChange: function() {
      this.favoriteSwitch = !this.favoriteSwitch
      this.favoriteSwitch ? this.likeCounter++ : this.likeCounter--
    },
    clearTextarea : function() {
      this.textareaStr = ""
    }
  },
})