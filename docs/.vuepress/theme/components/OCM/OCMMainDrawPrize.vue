<script setup lang="ts">
interface PrizeItem {
  name: string
  images: string[]
}

const props = defineProps<{
  rank: number
  rankPrize: PrizeItem
  participationPrize: PrizeItem
}>()
</script>

<template>
  <dl>
    <template v-for="prize in [props.rankPrize, props.participationPrize]" :key="prize.name">
      <dt>
        {{ prize === props.rankPrize ? `排名前 ${props.rank} 名奖励（${prize.name}）` : `参与奖励（${prize.name}）` }}
      </dt>
      <dd>
        <div class="rank-plate__images">
          <figure v-for="image in prize.images" :key="image">
            <img :src="image" alt="" decoding="async">
          </figure>
        </div>
      </dd>
    </template>
  </dl>

  <p class="rank-plate__note">※ 正赛奖品将在正赛结束、最终结果统计完成后，于湾岸终端获得。</p>
  <p class="rank-plate__note">※ “排名前 {{ props.rank }} 名奖励”将发放给最终排名前 {{ props.rank }} 位的车辆。</p>
  <p class="rank-plate__note">※ 图片仅供参考。</p>
</template>

<style scoped>
.ocm-main-draw-prize {
  max-width: 680px;
  margin: 2rem auto;
}

.rank-plate>h3 {
  padding: 14px 30px 16px;
  margin: 0;
  color: var(--vp-button-brand-text);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  background: var(--vp-c-brand-1);
  border-bottom: 2px solid var(--vp-c-brand-2);
}

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

.rank-plate__images figure:only-child {
  grid-column: 1 / -1;
  width: calc(50% - 0.375rem);
  margin-inline: auto;
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
  .ocm-main-draw-prize {
    margin: 1.5rem auto;
  }

  .rank-plate>h3 {
    padding: 12px 10px 14px;
  }

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

  .rank-plate__images figure:only-child {
    width: 100%;
  }

  .rank-plate__note {
    margin-top: 0.625rem;
  }
}
</style>
