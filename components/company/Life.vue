<template>
  <div class="container">
    <header class="header" data-aos="fade-up">
      <h2 class="title">Life at <span class="gradient">Kestra</span></h2>
    </header>
    
    <div class="grid" data-aos="fade-up">
      <article
        v-for="(card, index) in lifeCards"
        :key="card.id"
        :class="['card', card.type, card.variant]"
        data-aos="zoom-in"
        :data-aos-delay="(index * 100)"
        data-aos-easing="ease-in-out"
      >
        <NuxtImg
          v-if="card.type === 'image-card'"
          :src="card.image"
          :alt="card.alt"
          class="img"
        />
        <div v-else class="content">
          <h3 class="heading">{{ card.title }}</h3>
          <p class="desc">{{ card.description }}</p>
          <NuxtLink
            v-if="card.button"
            :to="card.button.href"
            :class="['btn', 'btn-sm', card.button.variant, 'cta']"
          >
            {{ card.button.text }}
          </NuxtLink>
        </div>
      </article>
    </div>

    <section class="brand-card" data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out">
      <div class="info">
        <span class="label">MEDIA</span>
        <h3 class="title">Brand Assets</h3>
        <p class="text">
          For Media Inquiries and Exclusive Insights,<br>
          Reach Out to Our Press Team at 
          <NuxtLink href="mailto:press@kestra.io" class="link" external>press@kestra.io</NuxtLink>
        </p>
        <NuxtLink
          to="/kestra-logo-kit.zip"
          class="btn btn-md btn-primary btn-download"
          external
          target="_blank"
          download="kestra-logo-kit.zip"
        >
          Download Logo Pack
        </NuxtLink>
      </div>
      <div class="media d-none d-md-flex">
        <NuxtImg 
          src="/landing/company/teams/assets-download.svg" 
          alt="Brand Assets" 
          class="img"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const lifeCards = [
  {
    id: 1,
    type: 'image-card',
    image: '/landing/company/teams/team-group.png',
    alt: 'Team Meeting'
  },
  {
    id: 2,
    type: 'text-card',
    variant: 'work-your-way-card',
    title: 'Work Your Way',
    description: 'From flexible hours to fully remote work, we give you the freedom to shape your days and work where you feel your best. Your life, your balance.'
  },
  {
    id: 3,
    type: 'image-card',
    image: '/landing/company/teams/team-img-1.png',
    alt: 'Remote Work'
  },
  {
    id: 4,
    type: 'text-card',
    variant: 'all-in-support-card',
    title: 'All-in Support',
    description: 'We\'ve got you covered — from health benefits to home office costs and the latest tools, so you can focus on what matters most: doing great work and growing with us.'
  },
  {
    id: 5,
    type: 'image-card',
    image: '/landing/company/teams/team-img-2.png',
    alt: 'Team Collaboration'
  },
  {
    id: 6,
    type: 'text-card',
    variant: 'hiring-card',
    title: 'We\'re Hiring',
    description: 'We are looking for talented open-source enthusiasts working remotely from anywhere. Browse our open positions, and find a job you love.',
    button: {
      text: 'Open Roles',
      href: '/careers',
      variant: 'btn-secondary'
    }
  }
]
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variable.scss";

.container {
  position: relative;
  min-height: 1473px;
  background: url('/landing/company/teams/gridbg.svg') no-repeat top center;
  background-size: auto;
  max-width: 100%;
  padding: $rem-5 $rem-1;

  @include media-breakpoint-up(sm) {
    padding: $rem-4 $rem-2;
  }

  @include media-breakpoint-up(md) {
    padding: 4.5rem $rem-4;
  }

  @include media-breakpoint-up(lg) {
    padding: 4.5rem;
  }

  @include media-breakpoint-up(xxl) {
    padding: 4.5rem 150px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    pointer-events: none;
  }

  &::before {
    top: 50%;
    bottom: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(23, 25, 33, 0.3) 40%, rgba(23, 25, 33, 0.8) 70%, #171921 100%);
    backdrop-filter: blur(32px);
    z-index: 1;
  }

  &::after {
    bottom: 0;
    height: 30%;
    background: linear-gradient(180deg, transparent 0%, rgba(21, 23, 30, 0.3) 50%, #15171E 100%);
    z-index: 2;
  }

  .header {
    margin: 0 auto $rem-2;
    width: min(1140px, 100%);
    position: relative;
    z-index: 20;

    .title {
      font: 600 #{$h2-font-size}/48px sans-serif;
      color: $white;
      text-align: center;

      @include media-breakpoint-down(md) {
        font-size: 28px;
        line-height: 40px;
      }

      @include media-breakpoint-up(xl) {
        text-align: left;
      }

      .gradient {
        background: linear-gradient(90deg, $primary 0%, $blue 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        display: inline-block;
      }
    }
  }

  .grid {
    position: relative;
    z-index: 20;
    display: grid;
    grid-template-columns: 1fr;
    gap: $rem-2;
    width: min(1140px, 100%);
    margin: 0 auto;
    justify-content: center;

    @include media-breakpoint-up(md) {
      grid-template-columns: repeat(2, 358px);
    }

    @include media-breakpoint-up(xl) {
      grid-template-columns: repeat(3, 358px);
    }

    .card {
      display: flex;
      flex-direction: column;
      width: min(358px, 100%);
      height: 422px;
      border-radius: $border-radius-lg;
      overflow: hidden;
      margin: 0 auto;

      @include media-breakpoint-up(md) {
        justify-self: center;
      }

      &.image-card {
        background: rgba($white, 0.05);
        backdrop-filter: blur(10px);

        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &.text-card {
        .content {
          padding: $rem-2;
          height: 100%;
          position: relative;

          .heading {
            font: 600 #{$h4-font-size}/1.2 sans-serif;
            color: $white;
            margin-bottom: $rem-1;
          }

          .desc {
            color: $white;
            line-height: 1.6;
            margin: 0;
          }

          .cta {
            position: absolute;
            bottom: $rem-2;
            left: $rem-2;
          }
        }
      }
    }
  }

  .brand-card {
    position: relative;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: $rem-4;
    width: min(1140px, 100%);
    height: 340px;
    margin: $rem-2 auto 0;
    padding: $rem-4;
    border-radius: $border-radius-lg;
    border: 1px solid;
    border-image-source: linear-gradient(180deg, #2B313E 0%, #131725 100%);
    background: linear-gradient(180deg, #21242E 0%, #1A1C24 100%);
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 40%;
      background: url('/landing/company/teams/gradients.svg') no-repeat right center / cover;
      pointer-events: none;
    }

    @media (max-width: 1140px) {
      flex-direction: column;
      height: auto;
      min-height: 320px;
      gap: $rem-2;
      padding: $rem-3 $rem-2;
      text-align: center;
      margin: $rem-3 auto 0;

      &::before {
        left: 0;
        background-position: center;
      }
    }

    @include media-breakpoint-down(lg) {
      min-height: 300px;
      gap: $rem-2;
      padding: $rem-2 1.5rem;
    }

    @include media-breakpoint-down(md) {
      padding: $rem-2 $rem-1;
      min-height: 280px;
      margin: $rem-2 auto 0;
    }

    @include media-breakpoint-down(sm) {
      gap: 1.5rem;
      min-height: 260px;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: min(542px, 100%);
      position: relative;
      z-index: 2;
      flex: 1;

      @media (max-width: 1140px) {
        align-items: center;
        text-align: center;
        gap: 1.25rem;
      }

      @include media-breakpoint-down(lg) {
        gap: $rem-1;
      }

      .label {
        font: 500 #{$font-size-sm}/1.5 "Source Code Pro",
        monospace;
        color: #CD88FF;
        text-transform: uppercase;
        margin: 0;
      }

      .title {
        font: 600 #{$h2-font-size}/1.5 $font-family-sans-serif;
        color: $white;
        margin: 0;

        @include media-breakpoint-down(md) {
          font-size: 28px;
        }

        @include media-breakpoint-down(sm) {
          font-size: 24px;
        }
      }

      .text {
        color: $white;
        line-height: 1.6;
        margin: -$rem-1 0 $rem-1 0;
        font-size: $font-size-base;

        @include media-breakpoint-down(sm) {
          font-size: $font-size-sm;
        }

        .link {
          color: $purple-36;
          text-decoration: underline;
          transition: color 0.3s ease;

          &:hover {
            color: $blue;
          }
        }
      }

      .btn-download {
        width: fit-content;
      }
    }

    .media {
      position: relative;
      z-index: 2;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      .img {
        width: 375px;
        height: 303px;
        object-fit: contain;

        @media (max-width: 1140px) {
          width: 300px;
          height: 242px;
        }

        @include media-breakpoint-down(xl) {
          width: 300px;
          height: 242px;
          margin-left: 3rem;
        }

        @include media-breakpoint-down(lg) {
          width: 250px;
          height: 202px;
        }

        @include media-breakpoint-down(md) {
          width: 200px;
          height: 161px;
        }
      }
    }
  }
}

$card-backgrounds: (
  'all-in-support-card': (rgba(33, 36, 46, 0.4), rgba(26, 28, 36, 0.4), 3px),
  'hiring-card': (rgba(60, 75, 124, 0.4), rgba(142, 158, 211, 0.4), 3px),
  'work-your-way-card': (rgba(33, 36, 46, 0.4), rgba(26, 28, 36, 0.4), 11px)
);

@each $variant, $props in $card-backgrounds {
  .#{$variant} {
    background: linear-gradient(180deg, nth($props, 1) 0%, nth($props, 2) 100%);
    backdrop-filter: blur(nth($props, 3));
  }
}
</style>
