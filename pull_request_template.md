## Requirements

- [ ] Have the requirements been met?
- [ ] Have stakeholder(s) approved the change?

## Code Formatting

- [ ] Is the code formatted correctly?
- [ ] Unecessary whitespace removed?
- [ ] Are the naming conventions followed?
- [ ] Are dynamic locator used?

## Best Practices

- [ ] Follow Single Responsibility principle?
- [ ] Are different errors handled correctly?
- [ ] Are errors and warnings logged?
- [ ] Magic values avoided?
- [ ] No unnecessary comments?
- [ ] Minimal nesting used? minimal usage of if-else

## Maintainability

- [ ] Is the code easy to read?
- [ ] Is the code not repeated (DRY Principle)?
- [ ] Is the code method/class not too long?

## Documentation

- [ ] Is there sufficient documentation?
- [ ] Is the ReadMe.md file up to date?

## Testing

- [ ] Do the new cases pass locally?
- [ ] Do all the other cases ran fine locally?

## Architecture

- [ ] Are resuable functions, classes insted of writting code again?
- [ ] Do you have framework to maintain everything in place?
- [ ] Relevant Parameters are configurable?

## Performance

- [ ] Is the code performance acceptable?
- [ ] Is automation code reducing the manual test case execution time?

1. For more information in detail on the checklist, go through this document - https://o365altimetrik-my.sharepoint.com/:w:/r/personal/cparihar_altimetrik_com/Documents/Code%20Review%20Checklist.docx?d=wb7d05100abc045dfa1af61e558ce71e2&csf=1&web=1

2. For better naming conventions, please go through the read me document.

---

##You can use following template while raising the PR:

### Ticket Number / Feature:

-

### Description:

-

### PR Check List:

- [ ] Is the code formatted correctly?
- [ ] Unnecessary whitespace removed?
- [ ] Is method or class name following proper naming convention?
- [ ] Is commented code removed?
- [ ] Are you using a design pattern in your coding style?
- [ ] Are files and packages maintain proper naming conventions?
- [ ] Avoid hardcode values, magic values
- [ ] Minimal nesting used
- [ ] Is there sufficient documentation?
- [ ] Is the read.me file up to date?
- [ ] Is Lint Errors removed?
- [ ] Does Testing execution proof provided?
- [ ] Test Execution Steps provided?

### Test Execution Proof:

-

### Lint Result Proof:

-

### How to Execute Test Case:

```sh
1. Go to wdio.local.conf.ts file and add the file path under specs which we wanted to execute.
2. Run the command npm run test-dev for local exeution.
3. Check the execution results.
```
