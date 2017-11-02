<template>
  <main class="content">
    <header>
      <div class="maga-page-header">
        <span>中国毕业后医学教育</span>
        <span>2017年第1期第1卷</span>
        <div>Chinese Journal Of Graduate Medical Education</div>
        <span>Vol.1 No.1 2017</span>
      </div>
      <hr>
      <div class="maga-category">
        论著
      </div>
      <h1 class="maga-title">
        加强制度建设确保住院医师培训质量的探索
      </h1>
      <div class="maga-author">
        <span>万学红<sub>1*</sub></span>，
        <span>王星月<sub>2</sub></span>，
        <span>黄丹丹<sub>2</sub></span>，
        <span>杨洋<sub>2</sub></span>
      </div>
      <div class="maga-unit">
        （1.四川大学华西医院院办；2.毕业后培训部，四川 成都 610041）
      </div>
      <div class="maga-abstract">
        <strong>摘要：</strong>对华西医院自2000年开展规范化培训的2 976名住院医师的培训、考核和管理进行分析与研究。经验表明：狠抓导师制执行、师资培训与要求、专职教学岗、四部考核体系、科室带教评价与绩效挂钩等制度的建设，有力保证了培训质量。通过实践得出以下结论：基本制度建设在全院达成共识，在规定的时间、规定的地点完成规定的培训任务等制度在各科室严格执行，是保证规范化培训质量的基础；对科室、教师、规培学员的严格管理，对科室和教师带教质量奖惩分明是保证规培质量的有力措施；建立科学合理而规范的学员考核评估体系，并根据结果反馈不断改进培训内容和方法，是不断推进和提高住院医师规培质量的有效策略与办法。
      </div>
      <div class="maga-keyword">
        <strong>关键词：</strong>住院医师培训计划；质量保证；核心措施
      </div>
      <div class="maga-detail">
        <span><strong>中图分类号：</strong>R-4；G642</span>
        <span><strong>文献标识码：</strong>A</span>
        <span><strong>文章编号：</strong>2096-4293(2017)01-030-05</span>
      </div>
      <h1 class="maga-title en">
        Quality assurance of residency training program by implementation of core measures
      </h1>
      <div class="maga-author en">
        WAN Xuehong*, WANG Xinyue, HUANG Dandan, YANY Yang
      </div>
      <div class="maga-unit en">
        (Huaxi Hospital, Sichuan University, Chengdu, Sichuan 610041, China)
      </div>
      <div class="maga-abstract en">
        <strong>Abstract : </strong>We summarized the data from 2 976 residents trained at West China Hospital, Sichuan University, from 2000 to 2017, with analysis of the residency program management, education and training quality, and evaluation methods. We established our “Huaxi Experience” with our core measures of residency training programs. Our core measures include endorsement from the department leadership, detailed curriculum, requirement of the duration of each rotation, mentor-trainee system, dedicated clinical teaching faculty position, and 4-step resident evaluation system (daily, monthly, annual, final). The implementation of the core measures plays important roles in quality assurance. We conclude that the detailed curriculum, education and training policies, evaluation and feedback system are crucial for quality assurance of the residency training programs.
      </div>
      <div class="maga-keyword en">
        <strong>Key words : </strong>Residency training program; Quality assurance; Core measures
      </div>
    </header>
    <article>
      <section>
        <h3 class="mag-title-lv1">1&nbsp;制度建设</h3>
        <div>
          <span class="mag-title-lv2">1.1  招录制度</span>
          <p>
            人才是卫生事业发展的第一资源，是深化医药卫生体制改革的重要支撑。为培养高质量的卫生人才，四川大学华西医院（华西医院）从2000年开展以社会人身份招收应届毕业生进行规范化培训（规培）[1]，经过17年不断探索实践，已建立起一套较完整的住院医师规培体系。目前已培训社会人身份的住院医师1 727人，外单位委培住院医师1 187人，农村订单定向免费生规培62人。本研究对华西医院在住院医师规培制度建设、严格管理、质量保证体系建设等进行分析与研究，现报道如下。</p>
          <p>
            人才是卫生事业发展的第一资源，是深化医药卫生体制改革的重要支撑。为培养高质量的卫生人才，四川大学华西医院（华西医院）从2000年开展以社会人身份招收应届毕业生进行规范化培训（规培）[1]，经过17年不断探索实践，已建立起一套较完整的住院医师规培体系。目前已培训社会人身份的住院医师1 727人，外单位委培住院医师1 187人，农村订单定向免费生规培62人。本研究对华西医院在住院医师规培制度建设、严格管理、质量保证体系建设等进行分析与研究，现报道如下。</p>
        </div>
      </section>
    </article>
    <footer>
      <!--作者相关信息-->
    </footer>
  </main>
</template>

<script>

  export default {
    name: 'imed-magazine',
    props: ['section'],
    data () {
      return {
        sections: {}
      }
    },
    methods: {
      defaultName (name = '') {
        return !name ? '' : name
      }
    }
  }
</script>

<style scoped>

  .content {
    margin: auto 0.5rem;
  }

  .maga-page-header {
    font-size: smaller;
  }

  .maga-category {
    font-size: 1.5rem;
    text-align: right;
  }

  .maga-category:before {
    content: '·';
  }

  .maga-category:after {
    content: '·';
  }

  .maga-title, .maga-author, .maga-unit {
    text-align: center;
  }

  .maga-unit {
    font-size: smaller;
  }

  .maga-abstract {
    text-align: justify;
  }

  .mag-title-lv2 ~ p:first-of-type {
    text-indent: 0;
    display: inline;
  }

  p {
    text-indent: 2em;
  }

</style>
