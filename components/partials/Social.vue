<template>
  <ul class="social">
    <li>
      <a href="https://www.youtube.com/user/JvMLimmat" title="YouTube" target="_blank">
        <YouTube />
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/JungvonMatt.Limmat" title="Facebook" target="_blank">
        <Facebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/JvM_Limmat" title="Twitter" target="_blank">
        <Twitter />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/jungvonmattlimmat/" title="Instagram" target="_blank">
        <Instagram />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/company/jung-von-matt-limmat/" title="LinkedIn" target="_blank">
        <LinkedIn />
      </a>
    </li>
    <li>
      <a href="https://www.xing.com/companies/jungvonmatt%2Flimmat?" title="Xing" target="_blank">
        <Xing />
      </a>
    </li>
  </ul>
</template>

<script>
import YouTube from '~/assets/images/youtube.svg?inline'
import Facebook from '~/assets/images/facebook.svg?inline'
import Twitter from '~/assets/images/twitter.svg?inline'
import Instagram from '~/assets/images/instagram.svg?inline'
import LinkedIn from '~/assets/images/linkedin.svg?inline'
import Xing from '~/assets/images/xing.svg?inline'

export default {
  name: 'Social',
  components: { YouTube, Facebook, Twitter, Instagram, LinkedIn, Xing }
}
</script>

<style lang="scss" scoped>
.social {
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-right: 2rem;
  @media (max-width: 1024px) {
    margin: 0 0 1.5rem 0;
  }
  & li:not(:last-child) {
    margin-right: 1rem;
  }
  a {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba($black, 0.3);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      @media (max-width: 1024px) {
        height: 35px;
        width: 35px;
      }
       svg {
        transition: fill .2s;
        width: 22px;
        height: 22px;
        @media (max-width: 1024px) {
          height: 18px;
          width: 18px;
      }
      }
      &:hover {
        & svg {
          fill: $blue;
        }
      }
    }
}

</style>
