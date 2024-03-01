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
        },
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
