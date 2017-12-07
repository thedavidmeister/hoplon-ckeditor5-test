(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon.jquery))

(def ready? (j/cell nil))

(h/html
 (h/head
  (j/with-let [el (h/script
                   :src "https://cdn.ckeditor.com/ckeditor5/1.0.0-alpha.2/balloon/ckeditor.js")]
   (h/with-dom el (reset! ready? true))))

 (h/body
  (j/with-let [el (h/div "foo edit me!")]
   (j/cell=
    (when ready?
     (js/BalloonEditor.create el))))))
