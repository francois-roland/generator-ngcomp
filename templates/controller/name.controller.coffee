'use strict'

(->

  ### @ngInject ###

  <%= classedName %>Ctrl = () ->
    vm = @
    vm.message = 'hello there'

    return vm

  <%= classedName %>Ctrl
    .$inject = []

  angular
    .module '<%= scriptAppName %>'
    .controller '<%= classedName %>Ctrl', <%= classedName %>Ctrl

)()
