<?php


namespace App\Manipulator\Css;


use App\Manipulator\Manipulator;
use Symfony\Component\DomCrawler\Crawler;

class CssManipulator implements Manipulator
{
    /**
     * @var CssParser
     */
    private $parser;
    /**
     * @var CssVisitor
     */
    private $cssVisitor;

    public function __construct(CssParser $parser, CssVisitor $cssVisitor)
    {
        $this->parser = $parser;
        $this->cssVisitor = $cssVisitor;
    }

    public function supports(string $type): bool
    {
        return $type === 'css';
    }

    public function manipulate(string $rules, string $content): string
    {
        $crawler = new Crawler($content);
        $ast = $this->parser->parse($rules);
        $this->cssVisitor->visit($ast, $crawler);

        return $crawler->html();
    }
}