<template>
  <ul class="social-icons">
    <li>
      <a href="https://www.youtube.com/user/JvMLimmat" title="YouTube" target="_blank">
        <i class="icon icon__youtube"></i>
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/JungvonMatt.Limmat" title="Facebook" target="_blank">
        <i class="icon icon__facebook"></i>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/JvM_Limmat" title="Twitter" target="_blank">
        <i class="icon icon__twitter"></i>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/jungvonmattlimmat/" title="Instagram" target="_blank">
        <i class="icon icon__instagram"></i>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/jung-von-matt-limmat/"
        title="LinkedIn"
        target="_blank"
      >
        <i class="icon icon__linkedin"></i>
      </a>
    </li>
    <li>
      <a href="https://www.xing.com/companies/jungvonmatt%2Flimmat?" title="Xing" target="_blank">
        <i class="icon icon__xing"></i>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.social-icons {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  // @include media-breakpoint-up(sm) {
  //   justify-content: flex-start;
  // }

  li + li {
    margin-left: 10px;
  }

  a {
    color: currentColor;
    display: block;
    text-decoration: none;
    line-height: 1;

    &:hover {
      color: #00e100;
    }
  }
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  font-size: 1.2rem;
  transition: color, 0.3s ease;
  border: 1px solid #c9c9c9;
  border-radius: 50%;

  .layout-type-rule & {
    border-color: currentColor;
  }

  // @include media-breakpoint-up(md) {
  //   width: 40px;
  //   height: 40px;
  //   font-size: 1.5rem;
  // }
}

[class^="icon__"],
[class*=" icon__"] {
  &::before {
    font-family: "jvm-icons";
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    vertical-align: middle;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

.icon__download::before {
  content: "\e008";
}
.icon__mail::before {
  content: "\e009";
}
.icon__phone::before {
  content: "\e00a";
}
.icon__facebook::before {
  content: "\e00b";
}
.icon__twitter::before {
  content: "\e00c";
}
.icon__youtube::before {
  content: "\e00d";
}
.icon__linkedin::before {
  content: "\e00e";
}
.icon__instagram::before {
  content: "\e00f";
}
.icon__xing::before {
  content: "\e010";
}
.icon__clock:before {
  content: "\e011";
}
</style>
