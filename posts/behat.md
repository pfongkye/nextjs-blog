---
title: 'Behat'
date: '2020-12-23'
---

# Behat

[Behat](https://docs.behat.org/en/latest/) is a php framework that is used to write BDD tests. It uses the [Gherkin](https://cucumber.io/docs/gherkin/) syntax.

You can transform a variable type into another:

```php
//Context.php file

/**
 * @Transform :values
 */
public function castStringToArray(string $values){
    return explode(',', $values);
}

/**
 * @Given my :values
 */
public function myValuesAsArray(array $values){
    //an array of values
}
```

You can use scenario outline to run your tests for different given values:

```gherkin
Scenario Outline: Add two values
    Given <v1> and <v2>
    When I add them
    Then the result should be <result>
Examples:
| v1 | v2 | result |
| 1  | 2  | 3      |
| 2  | 2  | 4      |
```
To run the tests:

```bash
#run all tests
$ vendor/bin/behat
#run a specific file
$ vendor/bin/behat <path>/<my_feature>.feature
#run a specific scenario
$ vendor/bin/behat <path>/<my_feature>.feature:<line_number>
```