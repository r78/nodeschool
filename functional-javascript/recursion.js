function getDependencies(tree, result) {
  result = result || []
  dependencies = tree.dependencies || []
  Object.keys(dependencies).forEach(dep => {
    var key = [dep, tree.dependencies[dep].version].join('@')
    if (!result.includes(key)) {
      result.push(key)
    }
    getDependencies(tree.dependencies[dep], result)
  })
  return result.sort()
}

module.exports = getDependencies
