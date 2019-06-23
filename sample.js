new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {
    name: 'A山B郎',
    cource: 'Webエンジニアコース',
    acceptance_period: '2019年01月期',
    default_last_id: 4,
    // last_id: 3,
    students: [
      { id: 1, name: '野呂浩良', cource: '機械学習コース', acceptance_period: '2019年01月期' },
      { id: 2, name: '富永修司', cource: 'Webエンジニアコース', acceptance_period: '2017年11月期' },
      { id: 3, name: '斉藤一起', cource: 'Webエンジニアコース', acceptance_period: '2017年11月期' }
    ]
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent: function() {
      let  {
        // default_last_id,
        name,
        cource,
        acceptance_period,
        students,
        last_id,
        default_last_id,
      } = this;

      students.push({
        id: students.length + 1,//last_id + 1,
        name: name,
        cource: cource,
        acceptance_period: acceptance_period
      });

      // this.last_id = students.length
    }
  }
})

// students = [ "aa", "b", "adff", ""]
// 0 => "aa"
