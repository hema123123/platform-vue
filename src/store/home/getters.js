export const getters = {
  navList: state => {
    let arr = [
      {
        id: 0,
        // tag: 'recommend',
        name: '推荐'
      }
    ]
    if (state.channel && state.channel.length) {
      for (let i = 0; i < state.channel.length; i++) {
        let item = {
          id: state.channel[i].id,
          // tag: state.section[i].tag,
          name: state.channel[i].name
        }
        arr.push(item)
      }
    }
    return arr
  },

}
