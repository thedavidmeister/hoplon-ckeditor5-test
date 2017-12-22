(ns app.main
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]))

(let [el (.createElement js/document "div")
      body (.-body js/document)]
 (.appendChild body el)
 (.create js/BalloonEditor el))
