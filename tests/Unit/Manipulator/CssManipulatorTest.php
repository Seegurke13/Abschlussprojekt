<?php


namespace Unit\Manipulator;


use App\Manipulator\Css\CssManipulator;
use App\Manipulator\Css\CssParser;
use App\Manipulator\Css\CssVisitor;
use PHPUnit\Framework\TestCase;

class CssManipulatorTest extends TestCase
{
    private $cssManipulator;
    private $text;

    protected function setUp()
    {
        $parser = new CssParser();
        $visitor = new CssVisitor();
        $this->cssManipulator = new CssManipulator($parser, $visitor);

        $this->text = file_get_contents(__DIR__ . '/../data/manipulatorText.html');

        parent::setUp();
    }

    public function testCssManipulator_remove()
    {
        $rules = '.test;remove';
        $output = $this->cssManipulator->manipulate($rules, $this->text);

        self::assertContains('Hello World', $output);
        self::assertNotContains('delete', $output);
    }

    public function testCssManipulator_crop()
    {
        $rules = '.test;crop';
        $output = $this->cssManipulator->manipulate($rules, $this->text);

        self::assertContains('delete', $output);
        self::assertNotContains('Hello World', $output);
    }
}