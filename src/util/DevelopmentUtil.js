class DevelopmentUtil {
  static isTestEnvironment() {
    if (process.env.NODE_ENV === 'test') return true;

    return false;
  }
}

export default DevelopmentUtil;
