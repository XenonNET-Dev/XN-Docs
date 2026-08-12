<script setup lang="ts">
interface PrizeItem {
  name: string
  images: string[]
}

const props = defineProps<{
  prizes: PrizeItem[]
}>()
</script>

<template>
  <dl>
    <template v-for="prize in props.prizes" :key="prize.name">
      <dt>{{ prize.name }}</dt>
      <dd>
        <div class="rank-plate__images">
          <figure v-for="image in prize.images" :key="image">
            <img :src="image" alt="" decoding="async">
          </figure>
        </div>
      </dd>
    </template>
  </dl>

  <p class="rank-plate__note">※ 显示的铭牌为本届比赛限定奖品。</p>
  <p class="rank-plate__note">※ 铭牌仅发放给参加比赛的车辆。</p>
  <p class="rank-plate__note">※ 无法通过其他方式获得，敬请谅解。</p>
  <p class="rank-plate__note">※ 图片仅供参考。</p>
</template>

<style scoped>
dl {
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--vp-c-divider);
}

dt {
  padding: 14px 30px;
  color: var(--vp-c-text-2);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-top: 0;
}

dd {
  padding: 10px 0;
  margin: 0;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-top: 0;
}

.rank-plate__images {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 0.75rem;
  max-width: 570px;
  margin: 0 auto;
}

.rank-plate__images figure {
  margin: 0;
}

.rank-plate__images img {
  display: block;
  width: 100%;
  height: auto;
}

.rank-plate__note {
  margin: 0.35rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1;
  text-align: left;
}

.rank-plate__note:first-of-type {
  margin-top: 1rem;
}

@media (max-width: 640px) {
  dt {
    padding: 12px 10px;
    font-size: 14px;
  }

  dd {
    padding: 6px 0;
  }

  .rank-plate__images {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    max-width: 400px;
  }

  .rank-plate__note {
    margin-top: 0.625rem;
  }
}
</style>
