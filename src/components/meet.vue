<template>
    <div class="meet-com">
        <div class="meet-com-content">
            <h1>与 Hana 相识</h1>
            <div class="text-center">
                <div class="day">{{meetDays}}</div>
                <div class="unit">天</div>
            </div>
            <div class="meet-day">2023年12月21日</div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const meetDays = ref(0)
meetDays.value = diffDays('2023/12/21')

function diffDays(firstDay) {
    // 定义两个日期
    const date1 = new Date(firstDay);
    const date2 = new Date();

    // 计算两个日期之间的毫秒数差值
    const diffTime = Math.abs(date2 - date1);

    // 将毫秒数转换为天数
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays); // 输出相差的天数
    return diffDays
}
</script>

<style scoped>
.meet-com {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    background-image: url('/hana/meetbg.webp');
    background-size: 100%;
}

.meet-com-content {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    padding-bottom: 28px;
    padding-top: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-size: 14px;
}

.day {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: 1;
}

.unit {
    font-size: 12px;
    opacity: 0.6;
    text-align: center;
    line-height: 1;
}

.meet-day {
    opacity: 0.8;
}
</style>
