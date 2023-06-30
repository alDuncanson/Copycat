export class CopyDataManager {
  static isHexColor(clipboardData: string): boolean {
    const hexColorRegex: RegExp = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    return hexColorRegex.test(clipboardData)
  }

  static isURL(clipboardData: string): boolean {
    const urlRegex: RegExp = /^(https?|ftp):\/\/[\w.-]+(?:\/[\w$-_.+!*'(),%]+)*(?:\?[\w$&-_.+!*'(),%]+)?(?:#[\w-]*)?$/i
    return urlRegex.test(clipboardData)
  }

  static determineDataType(clipboardData: string): DataType {
    if (this.isHexColor(clipboardData)) {
      return 'hex'
    } else if (this.isURL(clipboardData)) {
      return 'url'
    } else {
      return 'text'
    }
  }

  static getCopyData(clipboardData: string): CopyData {
    const dataType = this.determineDataType(clipboardData)

    const copyData = {
      type: dataType,
      data: clipboardData,
    }

    return copyData
  }
}

export type DataType = 'hex' | 'url' | 'text'

export interface CopyData {
  type: string,
  data: string
}