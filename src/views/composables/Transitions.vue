<template>
  <div class="page container">
    <div class="row">
      <Transition @before-enter="onBeforeEnter" @enter="onEnter" :css="false" appear>
        <div class="twelve columns" v-if="show">
          <h1 class="text-center text-red-500 font-bold text-5xl">Transition</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti tempore
            excepturi blanditiis magnam, soluta placeat consequatur incidunt nobis, praesentium nemo
            debitis voluptas quos adipisci magni dolore error assumenda aut. Sit esse eos temporibus
            placeat! Perferendis ullam maxime doloribus enim praesentium? Eaque amet in autem
            praesentium nobis quas accusantium, recusandae deserunt quibusdam ex magni
            exercitationem culpa cum ducimus non maxime! Commodi soluta reiciendis sapiente dolorum
            accusamus quos consectetur, fugiat deleniti delectus sit quas minima porro aspernatur
            consequatur libero consequuntur error exercitationem molestias voluptatibus, sunt ipsam,
            ut nobis! Pariatur, enim ullam? Beatae nesciunt enim repellat doloribus aperiam, culpa
            deserunt. Voluptatum ut dolores iure adipisci. Repudiandae facere unde ad blanditiis
            natus obcaecati officiis harum. Quod odio rem esse optio voluptas fugiat quo. Optio
            commodi sed temporibus vitae. Ipsa eligendi numquam atque impedit vitae rem? Voluptas
            dolore unde ex error corrupti quia itaque accusamus dolorum, placeat cum, repellat est
            suscipit dolorem, a necessitatibus? Dolore distinctio nesciunt expedita laborum, natus
            modi sint ullam repellendus sequi, veritatis porro in harum minima dolorum consectetur
            ut. Laboriosam distinctio esse laudantium sequi libero quas porro! Alias, ex dolorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est vero quidem inventore et
            eveniet minus animi doloribus ducimus nihil impedit necessitatibus suscipit modi non
            aliquam omnis, ratione nobis. Aut, commodi? Et suscipit laboriosam unde atque voluptatem
            culpa dolorem soluta. Ut voluptatibus voluptate laboriosam cupiditate, deserunt
            reiciendis accusamus ab, qui adipisci consectetur est, dolore mollitia minima aliquam
            aperiam velit? Iure, quod. Incidunt expedita commodi debitis repellat accusantium dolor,
            blanditiis corporis sit molestias aspernatur et dignissimos excepturi harum! Quisquam
            est perspiciatis vel soluta, aliquam, reiciendis maxime accusantium esse atque libero
            illo nemo? Temporibus accusantium sunt velit tempore, sint saepe pariatur natus deleniti
            culpa aliquam, dolore ducimus incidunt facilis labore nostrum quis tempora libero animi
            inventore illum debitis quibusdam nesciunt delectus. Placeat, sint? Illum, voluptatem.
            Dolor similique nulla ipsam dicta maiores molestias, facere aspernatur accusantium error
            beatae modi autem! Ab illum eius explicabo ea accusantium placeat nesciunt
            necessitatibus odit dolore, officia cupiditate vero!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit possimus quod error,
            eligendi veniam quos quaerat labore libero repudiandae totam deserunt quis provident
            pariatur ipsam doloribus enim eos? Magni, earum! Nam, libero. Facere sapiente mollitia
            nam sint nulla repudiandae aspernatur fuga officia, quas modi debitis magnam minima,
            facilis corrupti aut et quia vero officiis nobis adipisci cum. Consectetur, rem fuga!
            Dolor nemo eveniet recusandae deserunt itaque accusantium harum repellat maxime
            voluptatem amet fugit inventore adipisci et similique quam id mollitia officia officiis
            corrupti, quos eum? Possimus modi distinctio laboriosam tempora. Distinctio praesentium
            ex quod? Dolor nulla consequatur dolore ratione qui! Officiis beatae unde voluptatem
            quia saepe vel pariatur ipsam vitae eligendi a maxime qui odit soluta ea, cumque
            consequuntur doloribus? Quas corrupti nostrum error. Dolores quae quidem ipsa, officiis
            temporibus praesentium at, deleniti quos assumenda aperiam velit a maxime earum,
            recusandae quod facere rem ut fugiat amet magnam ea suscipit! Voluptatibus minima
            aliquam numquam, laudantium libero consequuntur, unde odio illo eius, magnam non quis
            tempora? Laboriosam laborum nihil enim fugit repellendus praesentium ducimus corrupti,
            assumenda, molestiae, veritatis odit consectetur iure! Asperiores est nobis rerum
            veritatis ut quisquam. Rem voluptate corrupti ratione, recusandae repellat quos odio
            molestiae atque, laudantium culpa ducimus voluptas eveniet saepe quae sapiente minima
            itaque rerum quaerat exercitationem? Odio quos quam et saepe placeat modi, dolores
            expedita quibusdam animi mollitia autem magni recusandae dolorum, laborum cum
            exercitationem officia quaerat! Suscipit dicta eaque mollitia impedit perferendis cumque
            officia odit? Aliquid recusandae nam beatae nulla facere dolorem. Possimus sequi a
            quaerat aperiam quo. Id veritatis eaque amet eius corrupti, aliquam aspernatur eveniet
            aperiam cumque sunt facere, harum suscipit alias est. Quis laudantium laborum
            praesentium ipsum, aliquam illum vero error ipsam accusamus dolor nihil voluptas
            perspiciatis pariatur tempore architecto cupiditate facere nulla. Repellat incidunt
            numquam nobis sit! Deleniti id doloribus fugit?
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const show = ref(false)
onMounted(() => {
  show.value = true
})
function onBeforeEnter(el) {
  gsap.set(el, {
    scale: 0.5,
    autoAlpha: 0,
  })
}
function onEnter(el, done) {
  gsap.to(el, {
    delay: 1,
    duration: 0.5,
    scale: 1,
    autoAlpha: 1,
    ease: 'power2.out',
    onComplete: done,
  })
}
</script>
<style lang="scss" scoped>
.container {
  p {
    margin-bottom: 40px;
  }
}
</style>
