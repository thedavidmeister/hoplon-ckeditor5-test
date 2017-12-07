(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  hoplon.jquery))

(h/html
 (h/head)
 (h/body
  (h/div "foo")))
