<?php


namespace Unit\Service;


use App\Manipulator\JQueryManipulator;
use PHPUnit\Framework\TestCase;

class JQueryManipulatorTest extends TestCase
{
    /**
     * @var JQueryManipulator
     */
    private $manipulator;
    private $text;

    protected function setUp()
    {
        parent::setUp();

        $this->text = file_get_contents(__DIR__ . '/../data/manipulatorText.html');

        $visitor = new JQueryVisitor();
        $parser = new JQueryParser();
        $this->manipulator = new JQueryManipulator($parser, $visitor);
    }

    public function testCssParser_multipleFind()
    {
        $result = $this->manipulator->manipulate('$("body").find(".test").remove();',  $this->text);

        self::assertNotContains('delete', $result);
        self::assertContains('Hello World', $result);
    }

    public function testCssParser_findClass()
    {
        $result = $this->manipulator->manipulate('$(".test").remove();', $this->text);

        self::assertNotContains('delete', $result);
        self::assertContains('Hello World', $result);
    }
}