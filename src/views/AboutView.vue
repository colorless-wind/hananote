<template>
  <div class="about">
    <meet></meet>
    <div class="timeline-box">
      <!-- timeline -->
      <vue-timeline-update v-for="dataItem in timelineDataList" :dateString="dataItem.dateString" :date="dataItem.date"
        :title="dataItem.title" :description="dataItem.description" :thumbnail="dataItem.thumbnail"
        :category="dataItem.category" :icon="dataItem.icon" :color="dataItem.color" />
    </div>
  </div>
</template>
<script>
import meet from '../components/meet.vue';
export default {
  components: {
    meet
  },
  data() {
    return {
      timelineDataList: [
        {
          dateString: '2023-12-21',
          date: new Date('2023-12-21'),
          title: '花花来到北京',
          description: '跟花花聊得很晚',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'purple', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },
        {
          dateString: '2023-12-22',
          date: new Date('2023-12-22'),
          title: '花花参加线上面试',
          description: '',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },
        {
          dateString: '2023-12-24',
          date: new Date('2023-12-24'),
          title: '花花为我做了第一顿饭',
          description: '',
          thumbnail: '/hana/563605.jpg',
          category: 'Hana',
          icon: 'pets',
          color: 'red', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },
        {
          dateString: '2023-12-25',
          date: new Date('2023-12-25'),
          title: '花花面试通过',
          description: '晚上大家一起聚餐庆祝花花通过面试',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },
        {
          dateString: '2023-12-27',
          date: new Date('2023-12-27'),
          title: '花花第一天上班',
          description: '我骑车载花花去地铁站',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'purple', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },
        {
          dateString: '2023-12-30',
          date: new Date('2023-12-30'),
          title: '换了新屋',
          description: '大家一起搬家',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-01-01',
          date: new Date('2024-01-01'),
          title: '陪花花一起接回小饭',
          description: '',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-01-05',
          date: new Date('2024-01-05'),
          title: '花花骑自行车被交通警告',
          description: '',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-01-06',
          date: new Date('2024-01-06'),
          title: '陪花花去入职体检',
          description: '',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-01-07',
          date: new Date('2024-01-07'),
          title: '花花和他爸爸见面',
          description: '',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-01-08',
          date: new Date('2024-01-08'),
          title: '花花来生理期很疼请假',
          description: '',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-01-10',
          date: new Date('2024-01-10'),
          title: '花花的爸爸参观了她上班的公司',
          description: '',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-01-20',
          date: new Date('2024-01-20'),
          title: '聚点串吧聚餐',
          description: '',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-01-21',
          date: new Date('2024-01-21'),
          title: '庆祝花花到来一个月',
          description: '绿茶餐厅聚餐<br>KTV唱歌',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'purple', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-01-27',
          date: new Date('2024-01-27'),
          title: '聚点串吧聚餐',
          description: '',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-01-28',
          date: new Date('2024-01-28'),
          title: '跟花花一起帮淼哥搬家',
          description: '',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-02-03',
          date: new Date('2024-02-03'),
          title: '庆祝花花拿到第一份工资',
          description: '花花请大家吃海底捞',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'purple', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-02-05',
          date: new Date('2024-02-05'),
          title: '花花来生理期疼的很严重请假',
          description: '我照顾花花<br>我推迟了一天车票',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'red', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-02-06',
          date: new Date('2024-02-06'),
          title: '花花来生理期疼的很严重请假',
          description: '我照顾花花',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-02-17',
          date: new Date('2024-02-17'),
          title: '庆祝花花到来两个月',
          description: '请花花吃烤肉',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-02-24',
          date: new Date('2024-02-24'),
          title: '元宵节花花请大家逛灯会',
          description: '',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'turquoise', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        },{
          dateString: '2024-02-25',
          date: new Date('2024-02-25'),
          title: '花花跟我表达了她的想法',
          description: '',
          thumbnail: '',
          category: 'Hana',
          icon: 'pets',
          color: 'red', // "black" | "blue" | "green" | "orange" | "purple" | "red" | "turquoise" | "white"
        }
      ]
    }
  },
  methods: {}
}
</script>

<style>
.about {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #273142;
  padding: 40px 0;
  /* background: -webkit-linear-gradient(315deg,#1b2431 55%,#647eff); */
}

.meet-box{

}

.timeline-box {
  width: 100%;
  background-color: #1b2431;
  background-color: #273142;
  padding: 40px;
}
</style>
