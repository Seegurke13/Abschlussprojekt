<?php


namespace App\Manipulator\JQuery;

use App\Manipulator\JQuery\JQueryParser;
use App\Manipulator\JQuery\JQueryVisitor;
use App\Manipulator\Manipulator;
use DOMWrap\Document;

class JQueryManipulator implements Manipulator
{
    private $parser;
    /**
     * @var JQueryVisitor
     */
    private $jQueryVisitor;

    public function __construct(JQueryParser $parser, JQueryVisitor $jQueryVisitor)
    {
        $this->parser = $parser;
        $this->jQueryVisitor = $jQueryVisitor;
    }

    public function manipulate(string $jqueryCode, string $text): string
    {
        $doc = new Document();
        $doc->html($text);

        $ast = $this->parser->parse($jqueryCode);
        $this->jQueryVisitor->visit($ast, $handle, $doc);

        return $doc->getHtml();
    }

    public function supports(string $type): bool
    {
        return $type === 'jquery';
    }
}