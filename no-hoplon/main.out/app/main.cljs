(ns app.main)
 ; (:require
 ;  [hoplon.core :as h]
 ;  [javelin.core :as j]))

(let [el (.createElement js/document "div")
      body (.-body js/document)]
 (.appendChild body el)
 (.create js/BalloonEditor el))

; (.append
;  (.getElementById js/document "mountpoint")
;  (.createElement js/document "div"))

; (def ready?
;  (j/with-let [c (j/cell nil)]
;   (h/with-interval
;    1000
;    (when (exists? js/BalloonEditor)
;     (h/with-timeout 1000
;      (reset! c true))))))
;
; (h/html
;  (h/head
;   (h/script
;    :src "https://cdn.ckeditor.com/ckeditor5/1.0.0-alpha.2/balloon/ckeditor.js"))
;
;  (h/body
;   (h/div
;    (j/with-let [el (.createElement js/document "div")]
;     (j/cell=
;      (when ready?
;       (js/BalloonEditor.create el)))))))
