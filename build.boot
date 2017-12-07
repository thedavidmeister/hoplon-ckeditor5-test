(set-env!
  :dependencies
  '[
    [org.clojure/clojure "1.9.0-RC2"]
    [org.clojure/clojurescript "1.9.946"]
    [adzerk/boot-cljs "2.1.4"]
    [hoplon/javelin "3.9.0"]
    [hoplon/hoplon "7.1.0-SNAPSHOT"]
    [tailrecursion/boot-jetty  "0.1.3"]
    [thedavidmeister/boot-github-pages "0.1.0-SNAPSHOT"]]

  :source-paths #{"src"}
  :asset-paths  #{"assets"})

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[hoplon.boot-hoplon :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]]
 '[thedavidmeister.boot-github-pages :refer [github-pages]])

(def compiler-options
 {:foreign-libs
  [
   ; ckeditor5
   {:file "lib/ckeditor5/lib/1.0.0-alpha.2/balloon/ckeditor.js"
    :provides ["ckeditor.lib"]}]})

(deftask front-dev
 "Build for local development."
 []
 (comp
  (watch)
  (speak)
  (hoplon)
  (cljs :compiler-options compiler-options)
  (serve :port 8000)))

(deftask build
 []
 (comp
  (hoplon)
  (cljs
   :optimizations :advanced
   :compiler-options compiler-options)))

(deftask deploy
 []
 (comp
  (build)
  (target
   :dir #{"gh-pages"})
  (github-pages)))
