export const appendLengthMixin = {
    computed: {
        appendLength() {
            return `${this.text} (${this.text.length})`;
        }
    }
}