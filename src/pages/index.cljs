(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon.jquery
  ckeditor.lib))

(h/html
 (h/head)
 (h/body
  (j/with-let [el (h/div "foo")]
   (js/BalloonEditor.create el))))
