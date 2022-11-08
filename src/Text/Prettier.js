import prettier from 'prettier';

function getOptions(fromTrailingComma, fromRange, fromParser, options) {
  options = Object.assign({}, options)
  options.trailingComma = fromTrailingComma(options.trailingComma)
  options.rangeEnd = fromRange(options.rangeEnd)
  options.parser = fromParser(options.parser)
  return options
}

export {Infinity as infinity};

export function formatImpl(fromTrailingComma) {
  return function(fromRange) {
    return function(fromParser) {
      return function(options) {
        return function(source) {
          return prettier.format(source, getOptions(fromTrailingComma, fromRange, fromParser, options))
        }
      }
    }
  }
}

export function checkImpl(fromTrailingComma) {
  return function(fromRange) {
    return function(fromParser) {
      return function(options) {
        return function(source) {
          return prettier.check(source, getOptions(fromTrailingComma, fromRange, fromParser, options))
        }
      }
    }
  }
}

export function formatWithCursorImpl(fromTrailingComma) {
  return function(fromRange) {
    return function(fromParser) {
      return function(options) {
        return function(source) {
          return prettier.formatWithCursor(source, getOptions(fromTrailingComma, fromRange, fromParser, options))
        }
      }
    }
  }
}
