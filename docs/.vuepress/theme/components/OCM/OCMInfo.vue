<script setup lang="ts">
interface ScheduleItem {
  label: string
  value: string
}

const props = defineProps<{
  image: string
  schedule: ScheduleItem[]
  aggregationTimes: string[]
}>()
</script>

<template>
  <section class="ocm-info" aria-label="在线活动信息">
    <figure class="ocm-info__banner">
      <img :src="props.image" alt="" decoding="async">
    </figure>

    <div class="ocm-info__table-wrap">
      <table class="ocm-info__table">
        <caption class="ocm-info__sr-only">比赛日程</caption>
        <tbody>
          <tr v-for="item in props.schedule" :key="item.label">
            <th scope="row">{{ item.label }}</th>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="ocm-info__notice">
      ※预赛和正赛之间以及正赛期间将进行以下“排名计算”。请注意，“排名计算”期间您将无法参加全服 1 位争夺战。
    </p>

    <div class="ocm-info__table-wrap">
      <table class="ocm-info__table ocm-info__table--aggregation">
        <caption class="ocm-info__sr-only">计算时间</caption>
        <tbody>
          <tr v-for="time in props.aggregationTimes" :key="time">
            <td>{{ time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.ocm-info {
  max-width: 680px;
  margin: 1.5rem auto 2rem;
  color: var(--vp-c-text-1);
}

.ocm-info__banner {
  max-width: 600px;
  margin: 0 auto;
}

.ocm-info__banner img {
  display: block;
  width: 100%;
  height: auto;
}

.ocm-info__table-wrap {
  margin-top: 1.25rem;
}

/* 表格单元格沿用 Plume 的 .vp-doc 表格样式。 */
.ocm-info__table {
  display: table;
  width: 100%;
  font-variant-numeric: tabular-nums;
}

.ocm-info__table:not(.ocm-info__table--aggregation) th {
  width: 1%;
  white-space: nowrap;
}

.ocm-info__table:not(.ocm-info__table--aggregation) tr:nth-child(2n) {
  background-color: var(--vp-c-bg);
}

.ocm-info__notice {
  margin: 1.25rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.2;
}

.ocm-info__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

@media (max-width: 640px) {
  .ocm-info {
    margin-top: 1rem;
  }

  .ocm-info__table th,
  .ocm-info__table td {
    padding: 6px 10px;
    font-size: 13px;
  }

  .ocm-info__table td {
    white-space: nowrap;
  }
}

@media (max-width: 360px) {
  .ocm-info__table th,
  .ocm-info__table td {
    padding: 6px 8px;
    font-size: 12px;
  }
}
</style>
