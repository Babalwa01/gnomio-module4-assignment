describe('Grade output function', () => {
    it('should return a grade of A', () => {
        expect(outputGrade(0.9).toBe('A'));
    });

    it('should return a grade of B', () => {
        expect(outputGrade(0.8).toBe('B'));
    });

    it('should return a grade of C', () => {
        expect(outputGrade(0.7).toBe('C'));
    });

    it('should return a grade of D', () => {
        expect(outputGrade(0.6).toBe('D'));
    });

    it('should return a grade of F', () => {
        expect(outputGrade(0.5).toBe('F'));
    });

    it('should throw an error if the number is out of range', () => {
        expect(function() {outputGrade(-1)}).toThrow('input must not be null / must be a number');
    });
});