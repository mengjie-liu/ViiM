<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VII M -> About</title>
    <link rel="stylesheet" href="../../assets/css/page.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="../../assets/js/page.js"></script>
  </head>
  <body>
    <header>
      <a href=<?= $site->url() ?> class="name bigTitleContainer">
        <p class="bigTitle red">vii M</p>
        <p class="bigTitle green">vii M</p>
        <p class="bigTitle blue">vii M</p>
      </a>
      <a href=<?= $site->find("about")->url() ?> class="about bigTitleContainer onAbout">
        <p class="bigTitle red">about</p>
        <p class="bigTitle green">about</p>
        <p class="bigTitle blue">about</p>
      </a>
    </header>
    <div class="subheader">
      <a href=<?= $site->url() ?> class="back smallTitleContainer">
        <p class="smallTitle red">back</p>
        <p class="smallTitle green">back</p>
        <p class="smallTitle blue">back</p>
      </a>
    </div>
    <div class="container">
      <div class="vid vertical">
        <?php foreach ($page->images() as $image): ?>
            <img src="<?= $image->url() ?>" alt="" />
        <?php endforeach ?>
      </div>
      <div class="text">
        <?= $page->description() ?>
      </div>
    </div>
    <footer class="hidden">
      <a href="" class="s smallTitleContainer">
        <p class="smallTitle red">Spotify</p>
        <p class="smallTitle green">Spotify</p>
        <p class="smallTitle blue">Spotify</p>
      </a>
      <a href="" class="i smallTitleContainer">
        <p class="smallTitle red">Instagram</p>
        <p class="smallTitle green">Instagram</p>
        <p class="smallTitle blue">Instagram</p>
      </a>
      <a
        href="https://viim.bandcamp.com/album/sublunary"
        target="”_blank”"
        class="bc smallTitleContainer"
      >
        <p class="smallTitle red">Bandcamp</p>
        <p class="smallTitle green">Bandcamp</p>
        <p class="smallTitle blue">Bandcamp</p>
      </a>
      <a href="" class="sc smallTitleContainer">
        <p class="smallTitle red">Soundcloud</p>
        <p class="smallTitle green">Soundcloud</p>
        <p class="smallTitle blue">Soundcloud</p>
      </a>
    </footer>
    <div class="blackLayer"></div>
  </body>
</html>
