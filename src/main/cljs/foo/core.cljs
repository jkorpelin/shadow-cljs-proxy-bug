(ns foo.core
  (:require 
   [reagent.dom :as rdom]))

(defn foobar
  []
  [:h1 "component"])

(defn mount-root! [model]
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [#(foobar)] root-el)))


(defn ^:dev/after-load init []
  (mount-root! {}))

