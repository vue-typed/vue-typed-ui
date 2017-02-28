var Path = require('path')
var _ = require('lodash')
var fs = require('fs')

const utils = {
  pascalCase(str) {
    return _.upperFirst(_.camelCase(str))
  },

  sortByKey(obj) {
    return _(obj).toPairs().sortBy(0).fromPairs().value()
  },


  hasReadme(path) {
    var toCheck = Path.join(path, 'README.md')
    var exists = utils.statPath(toCheck);
    return exists && exists.isFile()
  },

  statPath(path) {
    try {
      return fs.statSync(path);
    } catch (ex) {}
    return false;
  },

  comment(str) {
    var cmt = '\r\n/**'

    if (_.isString(str)) {
      cmt += '\r\n * ' + str
    } else {
      cmt += '\r\n * ' + str.description

      if (str.params || str.default || str.category || str.type)
        cmt += '\r\n * '

      if (str.category)
        cmt += '\r\n * Category: ' + str.category

      if (str.params) {
        _.each(str.params, function(prm, k) {
          cmt += '\r\n * @param {' + prm.type + '} ' + k
          if (prm.description)
            cmt += ' ' + prm.description
        })
      }

      if (str.default) {
        cmt += '\r\n * @default ' + str.default
      }

      if (str.type) {
        if (str.isFunction)
          cmt += '\r\n * @returns {' + str.type + '}'
        else
          cmt += '\r\n * @type {' + str.type + '}'
      }
    }
    return cmt + '\r\n */'
  }

}

module.exports = utils